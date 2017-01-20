var app = new Vue({
  el: '#app',
  data: {
    projects: [{
      id: 1,
      title: 'Home Automation project',
      image: 'img/project1_feature.png',
      // bgColor: '#fff5cc'
      address: 'blogpost1.html'
    },{
      id: 2,
      title: 'Sentiment Analysis',
      image: 'img/project2_feature.jpg',
      address: 'sentiment.html'
    },{
      id: 3,
      title: 'EV3 Autonomous Car',
      image: 'img/autonomous_feature.JPG',
      address: 'autonomous_car.html'
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
      $('.single-project-display .loadPosition').load(this.projects[id-1].address);
      $('.project-section-wrapper').css('background', this.projects[id-1].bgColor || '#e1e1e1');

      $('#portfolio').animate({left:"-30px"}, 300);
      $('.project-section-wrapper').animate({left:"5%"}, 300);
    },

    clearProject: function(){
      this.singleProject = '';
      $('#portfolio').animate({left:"0"}, 300);
      $('.project-section-wrapper').animate({left:"100%"}, 300, function(){
        $('.single-project-display .loadPosition').html('');
      });

    }

  }
});
