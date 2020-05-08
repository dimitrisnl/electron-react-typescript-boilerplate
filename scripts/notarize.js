const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;
  if (electronPlatformName !== 'darwin') {
    return;
  }

  const appName = context.packager.appInfo.productFilename;
  const appleId = 'apple-id';

  return await notarize({
    appBundleId: 'com.domain.app',
    appPath: `${appOutDir}/${appName}.app`,
    appleId,
    appleIdPassword: `password`,
  });
};
