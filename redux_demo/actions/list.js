
function queryList()
{
	return {
		type:'all', 
		list:[{id:1,text:'hello'}, {id:2,text:'redux'}]
	}	
}

module.exports = {
	queryList: queryList
}