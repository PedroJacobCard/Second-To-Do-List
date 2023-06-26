export interface Item {
    id: string,
    item: string,
    checked: boolean
  }
  
  export default class ListItems implements Item {
    constructor(
      //These properties are marked as private to encapsulate them within the class
      //and restrict direct access from outside the class. By making these properties private, 
      //they cannot be accessed or modified directly from external code,
      //ensuring better control over their usage and maintaining encapsulation.
      private _id: string = '',
      private _item: string = '',
      private _checked: boolean = false
    ) {}
  
    //The class provides getter and setter methods for each property. 
    //These methods allow controlled access to the private properties 
    //by providing a way to retrieve and modify their values indirectly. 
  
    get id(): string {
      return this._id
    }
  
    set id(id: string) {
      this._id = id
    }
  
    get item(): string {
      return this._item
    }
  
    set item(item: string) {
      this._item = item
    }
  
    get checked(): boolean {
      return this._checked
    }
  
    set checked(checked: boolean) {
      this._checked = checked
    }
  }