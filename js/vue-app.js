var app = new Vue({
  el: '#app',
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

    liveFilter : '',
    singleProject: ''
  },
  computed: {
    filteredProjects: function () {
      var self = this
      return self.projects.filter(function (project) {
        return project.title.toLowerCase().indexOf(self.liveFilter.toLowerCase()) !== -1
      })
    }
  },

  methods: {
    displayProject: function(projectTitle){
      this.singleProject = projectTitle;
      console.log(projectTitle);
    },
    clearProject: function(){
      this.singleProject = '';
    }
    // showComponent: function(name){
    //   if (name === 'home') {
    //     this.visibleComponent = 0;
    //   }else if (name === 'portfolio'){
    //     this.visibleComponent = 1;
    //   }else{
    //     this.visibleComponent = 2;
    //   }
    //   console.log("component " + name + " displayed");
    // }
    // showHome: function(){
    //   isShowHome = 1;
    //   console.log("showHome");
    // },
    // showPortfolio: function(){
    //   isShowHome = 0;
    //   console.log("showPortfolio");
    // }
  }
});
