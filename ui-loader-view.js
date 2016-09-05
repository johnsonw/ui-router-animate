function Controller ($animate, $element, $transitions, $scope) {
  const uiLoaderView = $element[0];
  let ctrl = this;
  ctrl.loaded = false;

  ctrl.$onInit = () => {
    if (ctrl.parent)
      ctrl.parent.child = ctrl;
  };

  const removeOnStart = $transitions.onStart(
    {},
    transition => {
      if (ctrl.loadOnce && ctrl.loaded ||
        !isLoaderMatch(
          ctrl,
          transition.from().name.split('.'),
          transition.to().name.split('.')
        ))
        return;

      const uiView = uiLoaderView.querySelector('ui-view');
      ctrl.loaded = true;
      uiLoaderView.classList.add('loading');
      return $animate.leave(uiView);
    }
  );

  $animate.on('enter', $element[0], (el, phase) => {
    const uiLoaderView = $element[0];
    const uiView = uiLoaderView.querySelector('ui-view');
    if (el[0] === uiView && phase === 'start')
      uiLoaderView.classList.remove('loading');
  });

  $scope.$on('$destroy', () => {
    removeOnStart();
    $animate.off('enter', uiLoaderView);

    if (ctrl.parent)
      ctrl.parent.child = null;
  });
}

function isLoaderMatch (ctrl, from, to) {
  const intersectionList = intersection(from, to);
  let curNode = ctrl;
  let count = 0;
  while (curNode.parent) {
    curNode = curNode.parent;
    count++;
  }

  return count === intersectionList.length ||
    (intersectionList.length === to.length && to.length - 1 === count);
}

function intersection (array1, array2) {
  let count = 0;
  const result = [];
  while(count < array1.length && array1[count] === array2[count]) {
    result.push(array1[count]);
    count++;
  }

  return result;
}

angular.module('uiRouterAnimate')
  .component('uiLoaderView', {
    controller: Controller,
    bindings: {
      loadOnce: '<'
    },
    require: {
      parent: '?^^uiLoaderView'
    },
    template: '<ui-view></ui-view>'
  });
