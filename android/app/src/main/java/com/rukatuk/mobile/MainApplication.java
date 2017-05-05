package com.rukatuk.mobile;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

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
        // return Arrays.<ReactPackage>asList(
        //           new InsertPackageName() // For example: new VectorIconsPackage()
        //       );
        return null;
    }
}