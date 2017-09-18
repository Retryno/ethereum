class Domain {
  constructor (obj) {
    this.id = obj.id
    this.name = obj.name.toLowerCase()
    this.price = obj.price
    this.wallet = obj.attributes[0] && obj.attributes[0].options[0].toLowerCase()
    this.categories = obj.categories.map(item => item.name.toLowerCase())
    this.description = obj.description
    this.link = obj.permalink
    this.img = obj.images[0].src
    this.status = obj.status
  }
}

export default Domain