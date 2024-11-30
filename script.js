//your JS code here. If required.
const colors=document.getElementById("colorSelect");
const rem=document.getElementById("abc");

rem.addEventListener("click",()=>{
	const selectOptions=colors.options[colors.selectedIndex];
	if(selectOptions)
	{
		colors.remove(colors.selectedIndex);
	}
})