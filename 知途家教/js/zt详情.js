var teacher = new Vue({
	el:'#familyTeacher',
	data:{
		list:{},
		// banner:[],
	},
	mounted: function(){
		this.getData(); 
	},
	methods: {
		getData:function(){
			var that = this;
			$.ajax({
				url:'http://api.zhituteam.com/api/teacher/info/id/',
				type:'get',
				data: {
            		id: window.location.search.split("=")[1],
                },
				datatype:'json',
				success: function(res){
	                   that.list=res.data.teacher;
	                   console.log(that.list);
	                },
			});
		},
	},
})

