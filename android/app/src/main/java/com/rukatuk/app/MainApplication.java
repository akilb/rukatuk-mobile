package com.rukatuk.app;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.airbnb.android.react.maps.MapsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage;
import io.invertase.firebase.crash.RNFirebaseCrashPackage;

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
        // // Add additional packages you require here
        return Arrays.<ReactPackage>asList(
                  new ReactNativeConfigPackage(),
                  new MapsPackage(),
                  new VectorIconsPackage(),
                  new RNFirebasePackage(),
                  new RNFirebaseAnalyticsPackage(),
                  new RNFirebaseCrashPackage()
              );
    }

    @Override
    protected String getJSMainModuleName() {
       return "index";
    }
}