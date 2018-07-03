import { message } from 'antd';
export function fetch_response(res,show_message){
	if(res.ok){
		if(res.body.code == 200){
			if(show_message== true ){ 
				message.success(res.body.data.message) 
			}
			return true;
		} else if(res.body.code == 201){
			if(show_message== true ){ 
				message.success(res.body.data.message) 
			}
			return true;
		} else if(res.body.code == 202){
			if(show_message== true ){ 
				message.success(res.body.data.message) 
			}
			return true;
		}
	} else if(res.error){
		if(res.body.error.code == 400){ //bad request
			message.error(res.body.error.message);
		} else if(res.body.error.code == 403){ //forbidden
			message.error(res.body.error.message);
		} else if(res.body.error.code == 404){ //not found
      message.error(res.body.error.message);
		}
		else if(res.body.error.code == 405){ //method not allowed
			message.error(res.body.error.message);
		} else if(res.body.error.code == 406){ //non acceptance
			message.error(res.body.error.message);
		} else if(res.body.error.code == 409){ //conflict
			message.error(res.body.error.message);
		} else if(res.body.error.code == 500){ //internal server error
			message.error(res.body.error.message);
		}
		return false
	}
}