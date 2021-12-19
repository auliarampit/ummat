package com.ummat;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import com.facebook.react.modules.i18nmanager.I18nUtil;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ummat";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) { 
    super.onCreate(null);
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
    sharedI18nUtilInstance.allowRTL(getApplicationContext(), true);
  }
}
