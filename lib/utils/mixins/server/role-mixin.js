RoleMixin = function (methodOptions) {
  const roles = methodOptions.roles;
  const runFunc = methodOptions.run;

  methodOptions.run = function (_data) {
    const userId = this.userId;

    if (!userId) {
      ErrorHandler('unauthorized', i18n.__('utils', 'signedInMixinError'));
    }

    const isInRole = Roles.userIsInRole(userId, roles);

    if (!isInRole) {
      ErrorHandler('forbidden', i18n.__('utils', 'roleMixinError'));
    }

    return runFunc.call(this, ...arguments);
  }
  return methodOptions;
}