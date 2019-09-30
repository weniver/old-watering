class Category {
  constructor(id, info, type) {
    this.id = id;
    this.info = info;
    this.type = type;
    this.ready = false;
    this.history = [];
  }
}

export default Category;
