// FullList.js
import ListItem from "./ListItem.js";

class FullList {
  constructor(_list = []) {
    this._list = _list;
  }

  get list() {
    return this._list;
  }

  load() {
    const storedList = localStorage.getItem('myList');
    if (typeof storedList !== 'string')
      return;
    const parsedList = JSON.parse(storedList);
    parsedList.forEach(itemObj => {
      const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);
      FullList.instance.addItem(newListItem);
    });
  }

  save() {
    localStorage.setItem('myList', JSON.stringify(this._list));
  }

  clearList() {
    this._list = [];
    this.save();
  }

  addItem(itemObj) {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id) {
    this._list = this._list.filter(item => item.id !== id);
    this.save();
  }
}

FullList.instance = new FullList();
export default FullList;