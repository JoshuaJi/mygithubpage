var portfolio = new Vue({
  el: '#portfolio',
  data: {
    projects: [{
      title: 'project 1',
      image: 'img/section1.jpg'
    },{
      title: 'project 2',
      image: 'img/section2.jpg'
    },{
      title: 'project 3',
      image: 'img/section1.jpg'
    },{
      title: 'project 4',
      image: 'img/section2.jpg'
    },{
      title: 'project 5',
      image: 'img/section1.jpg'
    },{
      title: 'project 6',
      image: 'img/section2.jpg'
    }],

    liveFilter : ''
  },
  computed: {
    filteredProjects: function () {
      var self = this
      return self.projects.filter(function (project) {
        return project.title.toLowerCase().indexOf(self.liveFilter.toLowerCase()) !== -1
      })
    }
  }
})
