new Vue ({
   el: '#edit',
      data: {
	show_iconEdit: false,
	message: 'Edit me.'
	},
	
      methods: {
	hideIconEdit: function(){
		this.show_iconEdit=false
	},

	toggleIconEdit: function(){
		this.show_iconEdit= !this.show_iconEdit;
		}
	},
	
	filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
});

 
