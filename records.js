angular.module('uiRouterAnimate')
  .component('records', {
    bindings: {
      recordItems: '<'
    },
    template: `
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="x in $ctrl.recordItems track by x.id">
          <td>{{x.id}}</td>
          <td>{{x.fname}}</td>
          <td>{{x.lname}}</td>
          <td>{{x.email}}</td>
          <td>{{x.description}}</td>
        </tr>
      </tbody>
    </table>
    `
  });
