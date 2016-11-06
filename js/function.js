/*


 */
// 密码复杂度函数1  返回 weak  good  strong 
function checkPassStrength(pass) {
	function Wxq(pass) {
	    var score = 0;
	    if (!pass)
	        return score;
	    // award every unique letter until 5 repetitions
	    var letters = new Object();
	    for (var i=0; i<pass.length; i++) {
	        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
	        score += 5.0 / letters[pass[i]];
	    }
	    // bonus points for mixing it up
	    var variations = {
	        digits: /\d/.test(pass),
	        lower: /[a-z]/.test(pass),
	        upper: /[A-Z]/.test(pass),
	        nonWords: /\W/.test(pass),
	        
	    }
	    variationCount = 0;
	    for (var check in variations) {
	        variationCount += (variations[check] == true) ? 1 : 0;
	    }
	    score += (variationCount - 1) * 10;
	    return parseInt(score);
	}
    var score = Wxq(pass);
    if (score > 80)
        return 'strong';
    if (score > 60)
        return 'good';
    if (score >= 30)
        return 'weak';
    return "";
}
// 密码强度验证2 返回强度级别 0 1 2 3 4
function checkStrong(sPW){ 
	function CharMode(wxq){ // 密码组成
		if (wxq>=48 && wxq <=57) //数字 
		return 1; 
		if (wxq>=65 && wxq <=90) //大写 
		return 2; 
		if (wxq>=97 && wxq <=122) //小写 
		return 4; 
		else 
		return 8; 
	}			
	function bitTotal(num){ //计算密码模式
		modes=0; 
		for (i=0;i<6;i++){ 
			if (num & 1) modes++; 
			num>>>=1; 
		} 
		return modes; 
	} 
	if (sPW.length<=6) 
		return 0; //密码太短 
	Modes=0; 
	for (i=0;i<sPW.length;i++){ 
		//密码模式 
		Modes|=CharMode(sPW.charCodeAt(i)); 
	} 
	return bitTotal(Modes); 
} 