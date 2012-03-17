package com.fullsail.myAVF;

import com.phonegap.*;
import android.os.Bundle;

public class MyAVFActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
    	super.setIntegerProperty("splashscreen",R.drawable.splash);
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
