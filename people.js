angular.module('uiRouterAnimate')
  .component('people', {
    controller ($state) {
      Object.assign(this, {
        loadRecords () {
          $state.reload('app.people.records');
        }
      });
    },
    template: `
    <div id="about">
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <button type="button" class="btn btn-primary"
      ng-click="$ctrl.loadRecords()">Load Records</button>

    <ui-loader-view></ui-loader-view>
    `
  });
