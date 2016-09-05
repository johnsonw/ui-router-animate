angular.module('uiRouterAnimate')
  .config(($stateProvider) => {
    const appState = {
      name: 'app',
      abstract: true,
      resolve: {
        delay ($timeout) {
          return new Promise (resolve => {
            $timeout(resolve, 1000);
          });
        }
      },
      template: '<ui-loader-view></ui-loader-view>'
    };

    const homeState = {
      name: 'app.home',
      url: '/',
      template: `
      <section class="row">
        <div class="col-md-6">
          <h2>Item 1</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div class="col-md-6">
          <h2>Item 2</h2>
          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
          qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
          pariatur?"</p>
        </div>
      </section>
      `
    }

    const peopleState = {
      name: 'app.people',
      resolve: {
        recordItems () {
          return Promise.resolve([
            {
              "id": 1,
              "fname": "John",
              "lname": "Doe",
              "email": "john.doe@someplace.com",
              "description": "John is a seasoned surfer."
            },
            {
              "id": 2,
              "fname": "Jane",
              "lname": "Doe",
              "email": "jane.doe@someplace.com",
              "description": "Jane is a professional kite boarder."
            }
          ]);
        }
      },
      component: 'people'
    }

    const peopleRecordsState = {
      name: 'app.people.records',
      url: '/people',
      component: 'records'
    };

    $stateProvider.state(appState);
    $stateProvider.state(homeState);
    $stateProvider.state(peopleState);
    $stateProvider.state(peopleRecordsState);
  });
