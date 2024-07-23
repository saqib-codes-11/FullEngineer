import React from "react";
import Button from "../../inputs/Button";
import {useDispatch} from "react-redux";
import {personSubmission} from "../../../reducers/listSlice";
import TextInput from "../../inputs/TextInput"

function Admin(){
    const [form, setForm]=React.useState({
        name:"",
        descr:""
    })
    const [vali, setVali]=React.useState("");

    const dispatch = useDispatch();

    const makeid = () =>{
        let result           = '';
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( var i = 0; i < 20; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    const changeValue2 = prop => vl =>{
        setForm({
            ...form,
            [prop]:vl
        })
    }

    const onSubmit = ()=>{
        if(form.name.replace(/\s/g, '').length>0&&form.descr.replace(/\s/g, '').length>0){
            const newPerson={
                name:form.name,
                descr:form.descr,
                id: makeid()
            }
            dispatch(personSubmission(newPerson))
            setForm({
                name:"",
                descr:""
            })
            setVali("Successfully submitted! You may submit another person if you'd like!")
        }else{
            setVali("Please ensure your inputs have more than one character and have no strings")
        }
    }

    return(
        <div className="admin page-wrapper center">
            <div className="form-wrap">
                <h1>Add List Item</h1>
                <h3>Name</h3>
                <TextInput  val={form.name} chg={changeValue2("name")}/>
                <h3>Description</h3>
                <TextInput  val={form.descr} chg={changeValue2("descr")}/>
                <div className="validation">{vali}</div>
                <Button message={"Submit"} click={()=>onSubmit()}/>
            </div>

        </div>
    )
}

export default Admin;