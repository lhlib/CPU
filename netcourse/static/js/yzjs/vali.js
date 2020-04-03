/*	
	用法，给input的父盒子加class类名vali，此项必须要加，不然没有提示，可自定义类名
	myvali配置class或者id都可以

	注意：
	1.json配置必须要有值,如不需要配置，删除即可

	2.开启与服务器验证必须要写路径。提交方式和格式不写默认post方法，json格式；
	  手机号验证提交后台数据的格式：		data:{phone:vl},	后台返回1可以注册（发送短信功能）
	  发送短信验证提交后台数据的格式：		data:{phone:vl},	此项提交的是验证手机号的数据，与上面配合使用（发送短信功能）

	  手机号验证提交后台数据的格式：		data:{phone1:vl},	后台返回1可以注册（单独验证）
	  输入手机短信验证码提交后台数据的格式：data:{vcode:vl},	后台返回1正确，返回0错误，返回-1过期
	  用户名验证提交后台数据的格式：		data:{name:vl},		后台返回1可以注册
	  验证码验证提交后台数据的格式：		data:{codes:vl},	后台返回1正确
	  邮箱验证提交后台数据的格式：			data:{mailbox:vl},	后台返回1正确

	3.一个ingput框只能出现一种验证。
	例：<input type="text" class="" id="name" placeholder="昵称">			(√)
	例：<input type="text" class="Required" id="name" placeholder="昵称">	(×)

	4.表单提交按钮必须是input,type="submit"

	5.表单里不能再出现p标签

	6.开启手机短信验证，发送短信按钮标签必须是input，type="button"

	7.手机号验证有两个方法myPhone1，myPhone，只验证手机号用哪个方法都可以。需要发送短信功能，用myPhone验证

	8.验证不为空自定义提示，Requireds，reqtps，必须同时使用

	配置：
	$.myvali({
		myform:"#v",									//表单id
		mybtn:"#v",										//提交表单按钮id	
		myVali:".v",									//input父盒子的class，可自定义类名

		Required:".Required",							//验证必填选项，值为Required,input自己加class
		RequiredTps:"不能为空"							//只验证不为空提示
		
		Requireds:".Requireds",							//验证必填不同提示值为Required,input自己加class
		reqtps:".reqtps",								//验证不为空不同提示,input父盒子的class,可自定义类名
		Reqlength:[[2,4],[3,5]],						//只验证不为空,设置最小长度和最大长度
		ReqlengthTps:["用户名","昵称"],					//验证必填长度提示
		RequiredsTps:["请输入用户名","请输入昵称"],		//默认提示

		myName:"#v",									//用户名id或class
		nameIsServer:false,								//用户名是否要与数据库验证，true为是，默认false为否
		nameIsserverUrl:["1.php"],						//用户名与数据库验证的路径，后台返回来的值是1则是用户名可以注册，否则就是用户名已被注册
		nameIsServerType:"post",						//用户名以什么方式提交
		nameIsServerDType:"json",						//用户名以什么格式提交

		myName2:"#v",									//昵称id或class
		myCard:"#v",									//身份证验证id或class
	
		myPhone1:"#v",									//修改手机号(原手机号用这个验证)id或class
		phoneIsServer1:false,							//手机号是否与数据库验证，true为是，默认false为否
		phoneIsServerUrl1:["1.php"],					//手机号与数据库验证的路径
		phoneIsServerType1:"post",						//以什么方式提交
		phoneIsServerDType1:"json",						//以什么格式提交


		myPhone:"#v",									//手机号id或class
		phoneIsServer:false,							//手机号是否与数据库验证，true为是，默认false为否
		phoneIsServerUrl:["1.php"],						//手机号与数据库验证的路径
		phoneIsServerType:"post",						//以什么方式提交
		phoneIsServerDType:"json",						//以什么格式提交

		isPhoneCode:false,								//开启手机短信验证，true开启，默认false不开启(此项功能与myPhone配合验证)
		phoneCodeBtn:"#v",								//发送手机验证码id或class（按钮）
		count:60,										//发送短信验证码倒计时，默认60s（按钮）
		codeBtnCol1:"#acacac",							//短信验证码倒计时（按钮，通过验证前）颜色
		codeBtnCol2:"#fff",								//短信验证码倒计时（按钮，通过验证后）颜色
		isPhoneCodeUrl:["1.php"],						//发送手机验证码与数据库验证的路径（按钮）
		isPhoneCodeType:"post",							//以什么方式提交（按钮）
		isPhoneCodeDType:"json",						//以什么格式提交（按钮）


		phoneCodeInput:"#v",							//短信验证码id或class（输入框）
		phoneCodeInputUrl:["1.php"],					//短信验证码与数据库验证的路径（输入框）
		phoneCodeInputType:"post",						//以什么方式提交（输入框）
		phoneCodeInputDType:"json",						//以什么格式提交（输入框）
		
		myMailbox:"#v",									//邮箱id或class
		mailboxIsServer:false,							//邮箱是否要与数据库验证，默认false为否
		mailboxIsServerUrl:["1.php"],					//邮箱与数据库验证的路径
		mailboxIsServerType:"post",						//以什么方式提交
		mailboxIsServerDType:"json",					//以什么格式提交

		myPassword:"#v",								//密码id或class
		myConfirmPassword:"#v",							//确认密码id或class

		myCode:"#v",									//验证码id或class
		CodeIsServerUrl:["1.php"],						//验证码与数据库验证的路径
		CodeIsServerType:"post",						//以什么方式提交
		CodeIsServerDType:"json",						//以什么格式提交

		PwdStrong:false,								//密码强度验证，默认false不开启，true开启
		isStrongTps:["弱","中","强"],					//密码强度提示，可自定义提示
			
		myNameMinLength:3,								//用户名最小长度，不写默认长度3
		myNameMaxLength:12,								//用户名最大长度，不写默认长度12
		
		myNameMinLength2:3,								//昵称最小长度，不写默认长度3
		myNameMaxLength2:12,							//昵称最大长度，不写默认长度12

		myPasswordMinLength:6,							//密码最小长度，不写默认长度6
		myPasswordMaxLength:16,							//密码最大长度，不写默认长度16
		
		corrCol:"#4E7504",								//设置正确提示文字的颜色，不设置默认绿色
		errCol:"red",									//设置错误提示文字的颜色，不设置默认红色
	});
*/

(function(my){
	my.extend({
		myvali:function(id){
			var myobj={
				myVali:".vali",							//input标签的父盒子class,默认vali

				Required:".Required",					//只验证不为空
				RequiredTps:["不能为空!!!"],			//只验证不为空提示

				Requireds:".Requireds",					//验证不为空自定义提示
				reqtps:".reqtps",						//验证不为空自定义提示,input父盒子的class
				// Reqlength:[[]],						//验证不为空,设置最小长度和最大长度
				ReqlengthTps:[""],						//验证不为空长度提示
				RequiredsTps:["不能为空！"],			//验证不为空默认提示

				myNameMinLength:3,						//默认用户名最小长度	
				myNameMaxLength:8,						//默认用户名最大长度

				myNameMinLength2:3,						//默认昵称最小长度	
				myNameMaxLength2:12,					//默认昵称最大长度

				myPasswordMinLength:6,					//默认密码最小长度
				myPasswordMaxLength:16,					//默认密码最大长度
				isServer:false,							//是否要与数据库验证，默认false为否

				corrCol:["rgb(78, 117, 4)"],			//默认正确提示文字的颜色
				errCol:["red"],							//默认错误提示文字的颜色

				PwdStrong:false,						//密码强度验证，默认false不开启，true开启
				isStrongTps:["弱","中","强"],			//密码强度提示，可自定义

				isServerType:"post",					//用户名以什么方式提交
				isServerDType:"json",					//用户名以什么格式提交

				count:60,								//发送短信验证码倒计时，默认60s
				isPhoneCodeType:"post",					//短信验证以什么方式提交（按钮）
				isPhoneCodeDType:"json",				//短信验证以什么格式提交（按钮）

				phoneCodeInputType:"post",				//短信验证以什么方式提交（输入框）
				phoneCodeInputDType:"json",				//短信验证以什么格式提交（输入框）

				phoneIsServerType:"post",				//手机号以什么方式提交
				phoneIsServerDType:"json",				//手机号以什么格式提交
			};
			var mclass=$.extend({},myobj,id)
					
			// console.log(mclass)

			var myVali=$(mclass.myVali)					//input标签父盒子class
			var myform=$(mclass.myform)					//表单id
			var	mybtn=$(mclass.mybtn)					//提交表单按钮

			//创建验证表单元素
			var p=$("<p style="+"font-size:12px;padding-top:2px;display:inline;"+"></p>")
			//将p元素插入到表单后代为myVali
			myform.find(myVali).append(p)
			
			var Required=$(mclass.Required)							//验证不为空
			var	RequiredTps=$(mclass.RequiredTps)					//验证不为空提示
			
			var Requireds=$(mclass.Requireds)						//验证不为空，不同提示
			var reqtps=$(mclass.reqtps)								//验证不为空，不同提示
			var Reqlength=$(mclass.Reqlength)						//验证不为空长度
			var	ReqlengthTps=$(mclass.ReqlengthTps)					//验证不为空长度自定义提示
			var RequiredsTps=$(mclass.RequiredsTps)					//验证不为空自定义提示

			var	myname1=$(mclass.myName)							//用户名
			var	myname2=$(mclass.myName2)							//昵称
			var	myphone=$(mclass.myPhone)							//手机号
			var	myphone1=$(mclass.myPhone1)							//修改手机号
			var	myCard=$(mclass.myCard)								//身份证
			var	isPhoneCode=$(Number(mclass.isPhoneCode))			//开启手机短信验证
							
			var	phoneCodeBtn=$(mclass.phoneCodeBtn)					//发送手机号短信验证码（按钮）
			var	count=$(mclass.count)								//发送短信验证码倒计时，默认60s
			var	codeBtnCol1=$(mclass.codeBtnCol1)					//短信验证码倒计时（按钮，通过验证前）颜色
			var	codeBtnCol2=$(mclass.codeBtnCol2)					//短信验证码倒计时（按钮，通过验证后）颜色
			var	isPhoneCodeUrl=$(mclass.isPhoneCodeUrl)				//发送手机验证码与数据库验证的路径
			var	isPhoneCodeType=$(mclass.isPhoneCodeType)			//以什么方式提交
			var	isPhoneCodeDType=$(mclass.isPhoneCodeDType)			//以什么格式提交

			var	phoneCodeInput=$(mclass.phoneCodeInput)				//手机短信验证码（输入框）
			var	phoneCodeInputUrl=$(mclass.phoneCodeInputUrl)		//短信验证码与数据库验证的路径
			var	phoneCodeInputType=$(mclass.phoneCodeInputType)		//以什么方式提交
			var	phoneCodeInputDType=$(mclass.phoneCodeInputDType)	//以什么方式提交

			var	mymailbox=$(mclass.myMailbox)						//邮箱

			var	mailboxIsServer=$(Number(mclass.mailboxIsServer))	//邮箱是否要与数据库验证，默认false为否
			var	mailboxIsServerUrl=$(mclass.mailboxIsServerUrl)		//邮箱与数据库验证的路径
			var	mailboxIsServerType=$(mclass.mailboxIsServerType)	//以什么方式提交
			var	mailboxIsServerDType=$(mclass.mailboxIsServerDType)	//以什么格式提交


			var	mypassword=$(mclass.myPassword)						//密码

			var	mypasswords=$(mclass.myConfirmPassword)				//确认密码

			var	phoneIsServer=$(Number(mclass.phoneIsServer))		//开启手机号与数据库验证
			var	phoneIsServerUrl=$(mclass.phoneIsServerUrl)			//手机号与数据库验证的路径
			var	phoneIsServerType=$(mclass.phoneIsServerType)		//以什么方式提交
			var	phoneIsServerDType=$(mclass.phoneIsServerDType)		//以什么格式提交

			var	phoneIsServer1=$(Number(mclass.phoneIsServer1))		//开启手机号与数据库验证
			var	phoneIsServerUrl1=$(mclass.phoneIsServerUrl1)		//手机号与数据库验证的路径
			var	phoneIsServerType1=$(mclass.phoneIsServerType1)		//以什么方式提交
			var	phoneIsServerDType1=$(mclass.phoneIsServerDType1)	//以什么格式提交

			var	myCode=$(mclass.myCode)								//验证码
			var	CodeIsServerUrl=$(mclass.CodeIsServerUrl)			//验证码与数据库匹配的路径
			var	CodeIsServerType=$(mclass.CodeIsServerType)			//以什么方式提交
			var	CodeIsServerDType=$(mclass.CodeIsServerDType)		//以什么格式提交					

			var	PwdStrong=$(Number(mclass.PwdStrong))				//验证密码强度，true开启，默认false不开启
			var	isStrongTps=$(mclass.isStrongTps)					//密码强度提示，可自定义

			var	NameMinLength=$(mclass.myNameMinLength)				//用户名最小长度
			var	NameMaxLength=$(mclass.myNameMaxLength)				//用户名最大长度

			var	NameMinLength2=$(mclass.myNameMinLength2)			//昵称最小长度
			var	NameMaxLength2=$(mclass.myNameMaxLength2)			//昵称最大长度

			var	PasswordMinLength=$(mclass.myPasswordMinLength)		//密码最小长度	
			var	PasswordMaxLength=$(mclass.myPasswordMaxLength)		//密码最大长度

			var	corrCol=$(mclass.corrCol)							//设置正确提示文字的颜色											
			var	errCol=$(mclass.errCol)								//设置错误提示文字的颜色		

			var	nameIsserver=$(Number(mclass.nameIsserver))			//用户名是否要与数据库验证，默认false为否
			var	nameIsserverUrl=$(mclass.nameIsserverUrl)			//用户名与数据库验证的路径
			var	nameIsServerType=$(mclass.nameIsServerType)			//以什么方式提交
			var	nameIsServerDType=$(mclass.nameIsServerDType)		//以什么格式提交

			//所有验证的方法
			var valiform={
				//手机号验证 
				vphone:function(){
					var strphone=/^1[3|4|5|7|8][0-9]{9}$/;
					if($(this).val()==""){
						$(this).siblings("p").html("请输入手机号").removeAttr("class").css({"color":errCol[0]})
					}else if(!strphone.test($(this).val())){
						$(this).siblings("p").html("请输入11位正确的手机号").removeAttr("class").css({"color":errCol[0]})
					}else{
						if(phoneIsServer[0]==1){
							var $this=$(this);
							var vl=$this.val();
							$.ajax({
								url:phoneIsServerUrl[0],
								type:phoneIsServerType.selector,
								dataType:phoneIsServerDType.selector,
								data:{phone:vl},
								success:function(data){
									if(data==1){
										$this.siblings("p").html("手机号可以注册").attr({"class":"correct"}).css({"color":corrCol[0]});
										myform.find(phoneCodeBtn).css("color",codeBtnCol2[0]).removeAttr("disabled");
									}else{
										$this.siblings("p").html("手机号已被注册").removeAttr("class").css({"color":errCol[0]});
										myform.find(phoneCodeBtn).css("color",codeBtnCol1[0]).attr("disabled","disabled");
									}
								},
								error:function(xml,error){
									console.log(error)
								}
							});
						}else{
							$(this).siblings("p").html("√").attr({"class":"correct"}).css({"color":corrCol[0]})
							// myform.find(phoneCodeBtn).css("color",codeBtnCol2[0]).removeAttr("disabled");
						}
					}
				},
				//修改手机号验证
				vphone1:function(){
					var strphone=/^1[3|4|5|7|8][0-9]{9}$/;
					if($(this).val()==""){
						$(this).siblings("p").html("请输入手机号").removeAttr("class").css({"color":errCol[0]})
					}else if(!strphone.test($(this).val())){
						$(this).siblings("p").html("请输入11位正确的手机号").removeAttr("class").css({"color":errCol[0]})
					}else{
						if(phoneIsServer1[0]==1){
							var $this=$(this);
							var vl=$this.val();
							$.ajax({
								url:phoneIsServerUrl1[0],
								type:phoneIsServerType1.selector,
								dataType:isServerDType1.selector,
								data:{phone1:vl},
								success:function(data){
									if(data==1){
										$this.siblings("p").html("手机号可以注册").attr({"class":"correct"}).css({"color":corrCol[0]});
										myform.find(phoneCodeBtn).css("color","#333").removeAttr("disabled");
									}else{
										$this.siblings("p").html("手机号已被注册").removeAttr("class").css({"color":errCol[0]});
										myform.find(phoneCodeBtn).css("color","#acacac").attr("disabled","disabled");
									}
								},
								error:function(xml,error){
									console.log(error)
								}
							});
						}else{
							$(this).siblings("p").html("√").attr({"class":"correct"}).css({"color":corrCol[0]})
						}
					}
				},
				//开启手机短信验证
				pCode:function(){
					if(myphone.siblings("p").attr("class")=="correct"){
						myform.find(phoneCodeBtn).css("color",codeBtnCol2[0]).removeAttr("disabled");
					}else{
						myform.find(phoneCodeBtn).css("color",codeBtnCol1[0]).attr("disabled","disabled");
					}
				},
				//点击发送短信验证码（按钮）
				msg:function(){
					$this=$(this);
					var a=count[0];
					$this.val(a+"S");
					var ti;
					var b=true;
					if(b==true){
						b=false;
						clearTimeout(ti)
						ti=setInterval(yz,1000);
						myform.find(phoneCodeBtn).attr("disabled","true").css("color",codeBtnCol1[0]);
					}
					function yz(){
						a--;
						if(a<0){
							a=0;
							$this.val("重新获取");
							b=true;
							myform.find(phoneCodeBtn).removeAttr("disabled").css("color",codeBtnCol2[0]);
							clearTimeout(ti)
						}else{
							$this.val(a+"S");
						}
					}
					var vl=myphone.val();
					$.ajax({
						url:isPhoneCodeUrl[0],
						type:isPhoneCodeType.selector,
						dataType:isPhoneCodeDType.selector,
						data:{phone:vl},
						success:function(data){
							// console.log(data)
						},
						error:function(err){
							console.log(err)
						}
					})
				},
				//获取输入短信验证码（框）
				yzm:function(){
					var $this=$(this);
					if(isPhoneCode[0]==1){
						var Tsval=$this.val();
						Tsval=Tsval.replace(/\s/g,'');
						if(Tsval==""){
							$this.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入验证码");
						}else{
							$this.siblings("p").attr({"class":"correct"}).html("");
							$.ajax({
								url:phoneCodeInputUrl[0],
								type:phoneCodeInputType.selector,
								dataType:phoneCodeInputDType.selector,
								data:{vcode:Tsval},
								success:function(data){
									if(data=="1"){
										$this.siblings("p").html("√").attr({"class":"correct"}).css({"color":corrCol[0]})
									}else if(data=="0"){
										$this.siblings("p").html("验证码错误").removeAttr("class").css({"color":errCol[0]})
									}else if(data=="-1"){
										$this.siblings("p").html("验证码已过期").removeAttr("class").css({"color":errCol[0]})
									}
								},
								error:function(err){
									console.log(err)
								}
							})
						}
					}else{
						myform.find(phoneCodeInput).siblings("p").html("√").attr({"class":"correct"}).css({"color":corrCol[0]})
					}
				},
				//用户名验证
				name1:function(){
					var Tsval=$(this).val();
					Tsval=Tsval.replace(/\s/g,'');
					if(Tsval==""){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入用户名");
					}else if(Tsval.length<NameMinLength[0]||Tsval.length>NameMaxLength[0]){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入"+NameMinLength[0]+"至"+NameMaxLength[0]+"位字符的用户名");
					}else{
						if(nameIsserver[0]==1){
							var $this=$(this);
							var vl=Tsval;
							$.ajax({
								url:nameIsserverUrl[0],
								type:nameIsServerType.selector,
								dataType:nameIsServerDType.selector,
								data:{name:vl},
								success:function(data){
									if(data==1){
										$this.siblings("p").html("用户名可以注册").attr({"class":"correct"}).css({"color":corrCol[0]});
									}else{
										$this.siblings("p").html("用户名已被注册").removeAttr("class").css({"color":errCol[0]});
									}
								},
								error:function(xml,error){
									console.log(error)
								}
							});
						}else{
							$(this).siblings("p").html("√").attr({"class":"correct"}).css({"color":corrCol[0]})
						}
					}
				},
				//密码验证
				password:function(){
					var Num=/^[0-9]+$/;						//初级验证
					var Num1=/^[a-zA-Z]+$/;					//初级验证
					var Num2=/^[\_\.]+$/;					//初级验证
					
					var NumEl=/^[0-9a-zA-Z]+$/;				//中级验证
					var NumEl1=/^[0-9\_\.]+$/;				//中级验证
					var NumEl2=/^[a-zA-Z\_\.]+$/;			//中级验证

					var NumElg=/^[0-9a-zA-Z\_\.]+$/;		//高级验证

					Tsval=$(this).val().replace(/\s/g,'');
					if(Tsval==""){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入密码");
					}else if($(this).val().length<PasswordMinLength[0]||$(this).val().length>PasswordMaxLength[0]){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]})
						.html("请输入"+PasswordMinLength[0]+"至"+PasswordMaxLength[0]+"位字符的密码");
					}else{
						//开启密码强度验证
						if(PwdStrong[0]==1){
							if(Num.test($(this).val())||Num1.test($(this).val())||Num2.test($(this).val())){
								$(this).siblings("p").attr({"class":"correct"}).css({"color":corrCol[0]}).html(isStrongTps[0]);
							}else if(NumEl.test($(this).val())||NumEl1.test($(this).val())||NumEl2.test($(this).val())){
								$(this).siblings("p").attr({"class":"correct"}).css({"color":corrCol[0]}).html(isStrongTps[1]);
							}else if(NumElg.test($(this).val())){
								$(this).siblings("p").attr({"class":"correct"}).css({"color":corrCol[0]}).html(isStrongTps[2]);
							}else{
								$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入数字英文下划线_点.组成的密码");
							}
						}else{
							$(this).siblings("p").attr({"class":"correct"}).css({"color":corrCol[0]}).html("√");
						}
					}

					// 判断是否跟第二次密码一致
					if($(this).val()!=mypasswords.val()&&mypasswords.val()!=""){
						mypasswords.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("两次输入的密码不一致");
					}else if(mypasswords.val()==""){
						mypasswords.siblings("p").html("");
					}else{
						mypasswords.siblings("p").attr({"class":"correct"}).css({"color":corrCol[0]}).html("√");
					}
				},
				//确认密码验证
				passwords:function(){
					Tsval=$(this).val().replace(/\s/g,'');
					if(Tsval==""){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请再次输入密码");
					}else if($(this).val()!=mypassword.val()){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html("两次输入的密码不一致");
					}else{
						$(this).siblings("p").attr({"class":"correct"}).css({"color":corrCol[0]}).html("√");
					}
				},
				//身份证验证
				card:function(){
					var reg=/(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
					
					var Tsval=$(this).val().replace(/\s/g,'');
					var caseval=Tsval.toUpperCase();

					if(caseval==""){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入身份证");
					}else if(reg.test(caseval)){
						$(this).siblings("p").attr({"class":"correct"}).css({"color":corrCol[0]}).html("√");
					}else{
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html("身份证号码错误");
					}
				},
				//昵称验证
				name2:function(){
					Tsval=$(this).val().replace(/\s/g,'');
					if(Tsval==""){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入昵称");
					}else if(Tsval.length<NameMinLength2[0]||Tsval.length>NameMaxLength2[0]){
						$(this).siblings("p").html("请输入"+NameMinLength2[0]+"至"+NameMaxLength2[0]+"位字符的昵称").removeAttr("class").css({"color":errCol[0]});
					}else{
						$(this).siblings("p").html("√").attr({"class":"correct"}).css({"color":corrCol[0]});
					}
				},
				//验证不为空
				Reqd:function(){
					Tsval=$(this).val().replace(/\s/g,'');
					// console.log(Tsval)
					if(Tsval==""){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html(RequiredTps[0]);
						return false;
					}else if($(this).siblings("p").html()==""){
						$(this).siblings("p").html("√").attr({"class":"correct"}).css({"color":corrCol[0]});
					}else{
						$(this).siblings("p").html("√").attr({"class":"correct"}).css({"color":corrCol[0]});
					}
				},
				//验证不为空，自定义提示
				Reqds:function(){
					Tsval=$(this).val().replace(/\s/g,'');
					if(Tsval==""){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html(RequiredsTps[reqtps.index($(this).parent())]);
					}else if(Reqlength.length!=0){
						// console.log(Reqlength.length)
						if(Tsval.length>=Reqlength[reqtps.index($(this).parent())][0]&&Tsval.length<=Reqlength[reqtps.index($(this).parent())][1]){
							$(this).siblings("p").html("√").attr({"class":"correct"}).css({"color":corrCol[0]});
						}else if(Tsval.length<Reqlength[reqtps.index($(this).parent())][0]||Tsval.length>Reqlength[reqtps.index($(this).parent())][1]){
							$(this).siblings("p").removeAttr("class").css({"color":errCol[0]})
							.html("请输入"+Reqlength[reqtps.index($(this).parent())][0]+"至"+Reqlength[reqtps.index($(this).parent())][1]+"位字符"+ReqlengthTps[reqtps.index($(this).parent())])
						}
					}else{
						$(this).siblings("p").html("√").attr({"class":"correct"}).css({"color":corrCol[0]});
					}
				},
				//验证邮箱
				mailbox:function(){
					var  strmailbox=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
					if($(this).val()==""){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入邮箱号");
					}else if(!strmailbox.test($(this).val())){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入正确的邮箱号");
					}else{
						if(mailboxIsServer[0]==1){
							var $this=$(this);
							var vl=$this.val();
							$.ajax({
								url:mailboxIsServerUrl[0],
								type:mailboxIsServerType.selector,
								dataType:mailboxIsServerDType.selector,
								data:{mailbox:vl},
								success:function(data){
									if(data==1){
										$this.siblings("p").html("邮箱可以注册").attr({"class":"correct"}).css({"color":corrCol[0]});
										myform.find(phoneCodeBtn).css("color",codeBtnCol2.selector).removeAttr("disabled");
									}else{
										$this.siblings("p").html("邮箱已被注册").removeAttr("class").css({"color":errCol[0]});
										myform.find(phoneCodeBtn).css("color",codeBtnCol1.selector).attr("disabled","disabled");
									}
								},
								error:function(xml,error){
									console.log(error)
								}
							});
						}else{
							$(this).siblings("p").attr({"class":"correct"}).css({"color":corrCol[0]}).html("√");
						}
					}
				},
				//验证码验证
				codes:function(){
					var	$this=$(this);
					Tsval=$this.val().replace(/\s/g,"");
					if(Tsval==""){
						$(this).siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入验证码");
					}else{
						$.ajax({
							url:CodeIsServerUrl[0],
							type:CodeIsServerType.selector,
							dataType:CodeIsServerDType.selector,
							data:{codes:Tsval},
							success:function(data){
								if(data=="1"){
									$this.siblings("p").attr({"class":"correct"}).css({"color":corrCol[0]}).html("√");
								}else{
									$this.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("验证码错误");
								}
							},
							error:function(xml,error){
								console.log(error)
							}
						});
					}
				},
				//表单提交验证是否全部通过
				vform:function(){
					//验证必填有几个为空，提示几个
					if(myform.find(Required).length>=1){
						for(var i=0;i<myform.find(Required).length;i++){
							if(myform.find(Required).eq(i).val()==""){
								myform.find(Required).eq(i).siblings("p").removeAttr("class").css({"color":errCol[0]}).html(RequiredTps[0]);
							}
						}
					}
					
					//验证必填自定义提示，有几个为空，提示几个
					if(myform.find(Requireds).length>=1){
						for(var j=0;j<myform.find(Requireds).length;j++){
							if(myform.find(Requireds).eq(j).val()==""){
								myform.find(Requireds).eq(j).siblings("p").removeAttr("class").css({"color":errCol[0]}).html(RequiredsTps[j]);
							}
						}
					}
					
					//用户名不为空
					if(myname1.val()==""){
						myname1.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入用户名");
					}else if(myname1.siblings("p").html()==""){
						valiform.name1.apply(myname1)
					}

					//昵称不为空
					if(myname2.val()==""){
						myname2.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入昵称");
					}else if(myname2.siblings("p").html()==""){
						valiform.name2.apply(myname2)
					}

					//手机号不为空
					if(myphone.val()==""){
						myphone.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入手机号");
					}else if(myphone.siblings("p").html()==""){
						valiform.vphone.apply(myphone);
					}

					//修改手机号不为空
					if(myphone1.val()==""){
						myphone1.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入手机号");
					}else if(myphone1.siblings("p").html()==""){
						valiform.vphone.apply(myphone1);
					}

					//手机短信验证不为空
					if(isPhoneCode[0]==1){
						if(phoneCodeInput.val()==""){
							phoneCodeInput.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入验证码");
						}else if(phoneCodeInput.siblings("p").html()==""){
							valiform.yzm.apply(phoneCodeInput);
						}
					}
					

					//邮箱不为空
					if(mymailbox.val()==""){
						mymailbox.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入邮箱号");
					}else if(mymailbox.siblings("p").html()==""){
						valiform.mailbox.apply(mymailbox);
					}

					//身份证不为空
					if(myCard.val()==""){
						myCard.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入身份证");
					}else if(myCard.siblings("p").html()==""){
						valiform.card.apply(myCard);
					}

					//密码不为空
					if(mypassword.val()==""){
						mypassword.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入密码");
					}else if(mypassword.siblings("p").html()==""){
						valiform.password.apply(mypassword);
					}

					//确认密码不为空
					if(mypasswords.val()==""){
						mypasswords.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请再次输入密码");
					}else if(mypasswords.siblings("p").html()==""){
						valiform.passwords.apply(mypasswords);
					}

					//验证码不为空
					if(myCode.val()==""){
						myCode.siblings("p").removeAttr("class").css({"color":errCol[0]}).html("请输入验证码");
					}else if(myCode.siblings("p").html()==""){
						valiform.codes.apply(myCode)
					}
				}
			}


			// 验证不为空
			Required.on("blur keyup",function(){
				valiform.Reqd.apply($(this));
			})

			// 验证不为空，自定义提示
			Requireds.on("blur keyup",function(){
				valiform.Reqds.apply($(this));
			})

			// 用户名验证
			myname1.on("blur keyup",function(){
				valiform.name1.apply($(this));
			})
			
			// 昵称检测
			myname2.on("blur keyup",function(){
				valiform.name2.apply($(this));
			})

			// 修改手机号验证
			myphone1.on("blur keyup",function(){
				valiform.vphone1.apply($(this));
			})

			// 手机号验证
			myphone.on("blur keyup",function(){
				valiform.vphone.apply($(this));
				valiform.pCode.apply($(this));
			})

			// 发送短信(按钮)
			phoneCodeBtn.on("click",function(){
				valiform.msg.apply($(this));
			})

			// 手机短信验证开启,不开启就注销发送短信功能和手机短信验证码验证功能
			if(isPhoneCode[0]==1){
				myform.find(phoneCodeBtn).css("color",codeBtnCol1[0]).attr("disabled","true");
			}else{
				phoneCodeBtn.off("click");
				phoneCodeInput.off("blur keyup");
			}

			//手机短信验证码(输入框)
			phoneCodeInput.on("blur keyup",function(){
				valiform.yzm.apply(phoneCodeInput);
			})

			// 邮箱验证
			mymailbox.on("blur keyup",function(){
				valiform.mailbox.apply($(this));
			})

			// 身份证验证
			myCard.on("blur keyup",function(){
				valiform.card.apply($(this));
			})

			// 密码验证
			mypassword.on("blur keyup",function(){
				valiform.password.apply($(this));
			})

			// 确认密码验证
			mypasswords.on("blur keyup",function(){
				valiform.passwords.apply($(this));
			})

			// 验证码
			myCode.on("blur keyup",function(){
				valiform.codes.apply($(this));
			})

			// 表单提交
			myform.on("click",mybtn,function(){
				myform.submit(function(){

					//调用vform方法验证是否全部验证通过
					valiform.vform.apply(myform);

					// valiform.yzm.apply(phoneCodeInput);
					//验证通过一项cunt就+1;
					var cunt=0;
					for(var i=0;i<myform.find(myVali).length;i++){
						if(myform.find(myVali).eq(i).children("p").attr("class")=="correct"||myform.find(myVali).eq(i).children("p").html()==""){
							cunt++;
						}
					}
					// console.log(cunt)
					if(cunt!=myform.find(myVali).length){
						return false;
					}
				})
				myform.off("click");
			})	
		}
	})
})($)