	var cnt=0; 
			function firstfocus(){
				document.form1.name.focus();
				return true;
			}
			function nameValidation(mn,mx){
					inputText=document.form1.name;
					var text=/^[a-zA-Z]+$/;
					var len=inputText.value.length;
					if(inputText.value.match(text) && len>=mn && len<=mx)
					{
						alert("ok the value is "+inputText.value);
						cnt++;
						document.form1.username.focus();
						return true;
					}
					else{
						alert("Name must be alphabet character between "+mn+" to "+mx);
						document.form1.name.focus();
						return false;
					}
				}
				function usernameValidation(mn,mx){
					var inputText=document.form1.username;
					var text=/^[a-zA-Z0-9._-]+$/;
					var len=inputText.value.length;
					if(inputText.value.match(text) && len<=mx && len>=mn)
					{
						alert("Username is ok ");
						cnt++;
						document.form1.password.focus();
						return true;
					}
					else{
						alert("Username must be A-Z a-z 0-9 . _  and must be "+mn+ " to "+mx);
						document.form1.username.focus();
						return false;
					}
				}
						

				function passwordValidation(mn,mx){

					var inputText=document.form1.password;
					var len=inputText.value.length;
					if(len<=mx && len>=mn){
						alert("ok your password is "+inputText.value);
						cnt++;
						document.form1.confirmPassword.focus();
						return true;
					}
					else{
						alert("Password should be in "+mn +" to "+mx);
						document.password.focus();
						return false;
					}
				}



						function confirmPasswordValidation(){
							var pass1=document.form1.password.value;
							var pass2=document.form1.confirmPassword.value;
							if(pass1==pass2)
							{
								alert("password is "+pass1 +" Confirm password is "+pass2);
								  cnt++;
								document.form1.email.focus();
								return true;
							}
							else{
								alert("Password did not match ");
								document.form1.confirmPassword.focus();
								return false;
							}
						}
					

				  function ValidateEmail(inputText)
				{
					var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
					if(inputText.value.match(mailformat))
					{
						 alert("Email ok");
						  cnt++;
						document.form1.phone.focus();
						return true;
					}
					else
					{
						alert("You have entered an invalid email address!");
						document.form1.email.focus();
						return false;
					}
				}



            	function phoneValidation(){
            		var phoneNo=/^[0-9]+$/;
            		var inputText=document.form1.phone;
            		if(inputText.value.match(phoneNo)){
            			cnt++;
            			 alert("Phone no ok");
            			return true;
            		}
            		else{
            			alert("Enter a valid phone no");
            			document.form1.phone.focus();
            			return false;
            		}
            	}

            	function check(){
            		if(cnt==6){
            			alert("Successfully submited!!");
            			return true;
            		}
            		else{
            			alert("Failed to submit all data!! corrected data is "+cnt);
            			return false;
            		}
            	}

