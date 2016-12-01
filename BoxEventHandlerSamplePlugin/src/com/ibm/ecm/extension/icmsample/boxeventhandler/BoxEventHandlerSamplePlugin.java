package com.ibm.ecm.extension.icmsample.boxeventhandler;

import java.util.Locale;

import com.ibm.ecm.extension.Plugin;

public class BoxEventHandlerSamplePlugin extends Plugin {

	@Override
	public String getId() {
		// TODO Auto-generated method stub
		return "BoxEventHandlerSamplePlugin";
	}

	@Override
	public String getName(Locale arg0) {
		// TODO Auto-generated method stub
		return "Box Event Handler Sample Plugin";
	}

	@Override
	public String getVersion() {
		// TODO Auto-generated method stub
		return "1.0";
	}
	
	public String getScript() {
		  return "CustomHandlerPlugin.js";
	}

	@Override
	public String getDojoModule() {
		return "BoxEventHandlerSamplePluginDojo";
	}

}
