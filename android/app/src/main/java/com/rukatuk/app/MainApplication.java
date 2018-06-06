package com.rukatuk.app;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.airbnb.android.react.maps.MapsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.microsoft.appcenter.reactnative.shared.AppCenterReactNativeShared;
import com.microsoft.appcenter.reactnative.appcenter.AppCenterReactNativePackage;
import com.microsoft.appcenter.reactnative.analytics.AppCenterReactNativeAnalyticsPackage;
import com.microsoft.appcenter.reactnative.crashes.AppCenterReactNativeCrashesPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        // Make sure you are using BuildConfig from your own application
        return BuildConfig.DEBUG;
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        AppCenterReactNativeShared.setAppSecret(BuildConfig.APP_CENTER_SECRET_ANDROID);

        // // Add additional packages you require here
        return Arrays.<ReactPackage>asList(
                  new ReactNativeConfigPackage(),
                  new MapsPackage(),
                  new VectorIconsPackage(),
                  new AppCenterReactNativePackage(this),
                  new AppCenterReactNativeAnalyticsPackage(this, true),
                  new AppCenterReactNativeCrashesPackage(this, "ALWAYS_SEND")
              );
    }

    @Override
    public String getJSMainModuleName() {
        return "index";
    }
}