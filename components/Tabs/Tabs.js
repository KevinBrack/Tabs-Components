class Tabs {
  constructor(element) {
    this.element = element;
    // create a reference to the ".tabs-link" class nested in your tab object
    this.links; //TODO
    // This step will map over the array creating new TabsLink class instances of each link.  No need to update anything here, just study what is going on.  Notice that we are creating another new object using the TabsLink class.
    this.links = Array.from(this.links).map( link => {
      return new TabsLink(link, this); // This is tabs
    });
    // Set the active link to the first item in the array
    this.activeLink; //TODO
    // Nothing to update here, just notice we are invoking the init() method
    this.init(); //TODO Just Uncomment
  }

  init() { 
    // invoke the method select() on activeLink
    this.activeLink; //TODO
  }

  updateActive(newActive) {
    // invoke the method deselect() on activeLink
    this.activeLink; //TODO
    // assign this.activeLink to the new active link (newActive)
    this.activeLink; // TODO
  }

  getTab(data) {
    // return a reference to the element's data attribute
    return this.element; //TODO
  }

}

class TabsLink {
  // notice that we passesd in the element reference as well as a reference to the parent class.
  constructor(element, parent) {
    this.element = element;
    // assign this.tabs to parent
    this.tabs = parent;
    // Using the method from the parent class above, pass in a reference to the custom data attribute.  
    this.tabsItem = parent.getTab(); // TODO
    // Create a new TabsItem object that passes in a tabsItem value that you just created above
    this.tabsItem; //TODO
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      // invoke the select() method on this
      this;// TODO
    });
  };

  select() {
    // Add a class named "tabs-link-selected" to the element
    this.element; //TODO
    // Notice that we are using the select method on tabsItem
    this.tabsItem.select(); //TODO
  }

  deselect() {
    // Remove a class named "tabs-link-selected" from the element
    this.element; //TODO
    // Notice that we are using the deselect method on tabsItem
    this.tabsItem.deselect(); //TODO
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Add a class named "tabs-item-selected" to the element 
    // this.element; //TODO
  }

  deselect() {
    // Remove a class named "tabs-item-selected" from the element 
    // this.element; //TODO
    // Congrats, you finished all the instruction, check out your tab navigator!
  }
}


// START HERE: create a reference to the ".tabs" classes
let tabs = document.querySelectorAll('.tabs');
// console.log(tabs);
// map through each tabs element and create a new Tabs object.  Be sure to pass in a reference to the tab when creating the Tabs object.
tabs = Array.from(tabs).map(tab => new Tabs(tab));
// console.log(tabs);

