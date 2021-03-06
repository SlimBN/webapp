import * as mutation from './mutation-types';

const state = () => ({
  userdata: {},
  roles: [],
  privileges: [],
  accessToken: "",
  accessTokenType: ""
});

const mutations = {

  [mutation.SIGNIN](state) {
    state.showLoader = true;
  },
  [mutation.SIGNIN_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.SIGNIN_ERROR](state) {
    state.showLoader = false;
  },
  [mutation.SIGNIN_SUCCESS](state, payload) {
    this.$toast.success('Welcome, ' + payload.username);
    state.showLoader = false;
    state.userdata = payload;
    var response = payload;
    state.accessToken = response.accessToken;
    state.accessTokenType = response.tokenType;
    if (window.localStorage) {
      console.log("Window loaded")

      window.localStorage.setItem('ospic.token', response.accessToken);
      window.localStorage.setItem('ospic.roles', response.roles);
      window.localStorage.setItem('ospic.email', response.email);
      window.localStorage.setItem('ospic.tokentype', response.tokenType);
      window.localStorage.setItem('ospic.uid', response.id);
      window.localStorage.setItem('ospic.username', response.username);
      sessionStorage.setItem('ospic.token', response.accessToken)
      window.localStorage.setItem("ospic.time", new Date());
      this.$cookies.set('ospic.tokentype', response.tokenType, { path: '/', maxAge: 60 * 60 * 24 * 1 });
      this.$cookies.set('ospic.token', response.accessToken, { path: '/', maxAge: 60 * 60 * 24 * 1 });
    }
    //this.$router.app.refresh()

    // console.log(localStorage.getItem('ospic.token'))

    this.$router.push('/');
  },
  [mutation.SIGNOUT](state) {
    state.showLoader = true;
  },
  [mutation.SIGNOUT_SUCCESS](state) {
    state.showLoader = false;
    state.userdata = null;
    window.localStorage.clear();
    sessionStorage.clear();
    this.$router.push('/signin');
  },
  [mutation.SIGNOUT_FAILED](state) {
    state.showLoader = false;
  },
  /**User roles */
  [mutation.FETCH_ROLES](state) {
    state.showLoader = true;
  },
  [mutation.FETCH_ROLES_ERROR](state) {
    state.showLoader = false;
  },
  [mutation.FETCH_ROLES_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.FETCH_ROLES_SUCCESS](state, payload) {
    state.showLoader = false;
    state.roles = payload;
  },
  /** Role privileges */
  [mutation.REQUEST_PRIVILEGES](state) {
    state.showLoader = true;
  },
  [mutation.REQUEST_PRIVILEGES_ERROR](state) {
    state.showLoader = false;
  },
  [mutation.REQUEST_PRIVILEGES_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.REQUEST_PRIVILEGES_SUCCESS](state, payload) {
    state.showLoader = false;
    state.privileges = payload;
  }
};
const actions = {
  async _authenticate_then_login({ commit }, payload) {
    commit(mutation.SIGNIN);
    await this.$api.$post(`auth/signin`, payload)
      .then(response => {
        if (response.accessToken != null) {
          commit(mutation.SIGNIN_SUCCESS, response);

        }

      }).catch(error => {
        commit(mutation.SIGNIN_ERROR);
        localStorage.removeItem('ospic');
        console.log(error);

      });
  },

  _clear_local_storage_and_sign_out({ commit }) {
    window.localStorage.clear();
    localStorage.removeItem('ospic.*');
    sessionStorage.clear();
    this.$router.push('/signin');
  },
  async logout({ commit }) {
    await this.$api.$get(`auth/signout`)
      .then(response => {
        if (response.result == 'OK') {
          commit(mutation.SIGNOUT_SUCCESS);

        }


      }).catch(error => {
        commit(mutation.SIGNOUT_FAILED);

      });
  },
  async fetchuserroles({ commit }) {
    commit(mutation.FETCH_ROLES);
    await this.$api.$get(`auth/roles/`).then(response => {
      if (response != null) {
        commit(mutation.FETCH_ROLES_SUCCESS, response)
      }
    }).catch(error => {
      commit(mutation.FETCH_ROLES_FAILED);
      console.log(error);

    });
  },
  async request_role_privileges({ commit }) {
    commit(mutation.REQUEST_PRIVILEGES);
    await this.$api.$get(`auth/authorities/`).then(response => {
      commit(mutation.REQUEST_PRIVILEGES_SUCCESS, response)
    }).catch(error => {
      commit(mutation.REQUEST_PRIVILEGES_FAILED);
      console.log(error);

    });
  }

};
const getters = {
  isLoggedIn: function (state) {
    return (window.localStorage.getItem('ospic.token') && window.localStorage.getItem('ospic.tokentype')) !== null;
  },
  userInfos: function (state) {
    return state.userdata;
  },
  userroles: function (state) {
    return state.roles;
  },
  privileges: function (state) {
    return state.privileges;
  },
  role: (state) => (id) => {
    return state.roles.find(role => role.id === id)
  },
  accessToken: function (state) {
    var token = state.userdata.accessToken;
    if (typeof something != "undefined") {
      return token;
    } else {
      return window.localStorage.getItem('ospic.token');
    }
  },
  accessTokenType: function (state) {
    var token = state.userdata.accessTokenType;
    if (typeof something != "undefined") {
      return token;
    } else {
      return window.localStorage.getItem('ospic.tokentype');
    }
  }
};
export default {
  state,
  getters,
  mutations,
  actions,
};
