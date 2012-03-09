package com.phonegap.goFast;


import android.os.Bundle;
import com.phonegap.*;

public class GoFast_AndroidActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}