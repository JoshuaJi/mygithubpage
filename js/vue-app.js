var app = new Vue({
  el: '#app',
  data: {
    projects: [{
      id: 1,
      title: 'Home automation project',
      image: 'img/project1_feature.png',
      bgColor: '#fff5cc'
    },{
      id: 2,
      title: 'project 2',
      image: 'img/section2.jpg'
    },{
      id: 3,
      title: 'project 3',
      image: 'img/section1.jpg'
    },{
      id: 4,
      title: 'project 4',
      image: 'img/section2.jpg'
    },{
      id: 5,
      title: 'project 5',
      image: 'img/section1.jpg'
    },{
      id: 6,
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

    showProject: function(id){
      console.log(id);
      $('.single-project-display .loadPosition').load('blogpost'+id+'.html');
      $('.single-project-display').css('background', this.projects[id-1].bgColor);

      $('#portfolio').animate({left:"-30px"}, 300);
      $('.single-project-display').animate({left:"90px"}, 300);
    },

    clearProject: function(){
      this.singleProject = '';
      $('#portfolio').animate({left:"0"}, 300);
      $('.single-project-display').animate({left:"100%"}, 300, function(){
        $('.single-project-display .loadPosition').html('');
      });

    }

  }
});
