AppUtil = {
  temp: new ReactiveDict(null, {}),
  refreshTokens: new ReactiveDict(null, {}),

  reset: function () {
    AppUtil.temp.clear();
    AppUtil.refreshTokens.clear();
  }
};

Template.registerHelper('appUtil', function () {
  return AppUtil;
});