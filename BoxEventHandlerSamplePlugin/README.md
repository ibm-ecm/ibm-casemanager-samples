# Box Event Handler Sample Plugin

This sample is a custom Box Event Handler that watches for Box document upload events that get uploaded to a specified Box sub-folder of the Box collaboration folder. When a document gets uploaded to the specified Box sub-folder, this event handler will copy the uploaded Box document to the corresponding Case's root folder with a specified Document Class as well. In our sample solution, we configured the solution to create a new case (using the Starting Document Type) when you add a document with the specified Document Class.

##### Resources included:
- BoxEventHandlerSamplePlugin.jar
  The sample plugin

- Sample_Box_Event_Handler_Solution_solution.zip
  The sample solution that can be used in conjunction with the sample plugin

- Build and deploy our sample Box event handler.pdf
  Detailed instructions on how to build and deploy our sample Box event handler

- Creating a custom handler for the IBM Case Manager Box Event Listener.htm
  Instructions on how to develop your own Box Event Handler 
