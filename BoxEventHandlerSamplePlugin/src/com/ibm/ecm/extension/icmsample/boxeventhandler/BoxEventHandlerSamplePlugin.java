package com.ibm.ecm.extension.icmsample.boxeventhandler;

import java.util.Locale;

import com.ibm.ecm.extension.Plugin;

public class BoxEventHandlerSamplePlugin extends Plugin {

	@Override
	public String getId() {
		return "BoxEventHandlerSamplePlugin";
	}

	@Override
	public String getName(Locale arg0) {
		return "IBM Case Manager Box Event Handler Sample Plugin";
	}

	@Override
	public String getVersion() {
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
