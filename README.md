# engine-testing

This is a testing application to replicate issues that I was seeing when trying to move engines around in the main app. 

According to the [docs](https://ember-engines.com/docs/services) You should be able to rename a service when passing it into an engine in the app directory using the format ```{"newName": "oldName"}```. This works great when running the application and while doing an application test, but doesn't work as expected while accessing the service using ```this.owner.lookup('service:newName")```. In these cases it's available via the original name at ```this.owner.lookup('service:oldName')```.

I've provided some tests to highlight the expected behaviour.

