import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Card, notification } from 'antd';
import { Link } from "react-router-dom"
import axios from "axios"
import "../App.css"

class LoginForm extends Component {
    constructor(){
        super()
        this.state={
            notice : ""
        }
    }
    
    openNotification = () => {
        notification.open({
          message: "Successfully logged in",
          description:
            'You are ready to go...',
          style: {
            width: 600,
            marginLeft: 335 - 600,
          },
        });
      };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                const formdata = {
                    email: values.email,
                    password: values.password
                }
                axios.post("http://localhost:3005/users/login", formdata)
                    .then(() => {})
                    .catch(err => console.log(err))
                this.openNotification()
                setTimeout(() => {
                    this.props.history.push("/")
                }, 2000);

            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="row align-items-center">
                <div className="col-sm-4">
                </div>
                <div className="col-sm-3" style={{ marginTop: 80 }}>
                    
                    <Card title="Sign in" style={{ width: 475, marginTop: 80, borderRadius: 10, marginBottom: 43, fontSize: 20 }} headStyle={{ textAlign: "center", fontSize: 30 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item style={{ width: 420 }} label="E-mail">
                                {getFieldDecorator('email', {
                                    rules: [
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ],
                                })(<Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="email"
                                    size="large"
                                />
                                )}
                            </Form.Item>
                            <Form.Item label="Password">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        size="large"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                {/* <a style={{ float: "right" }} href="">
                                    Forgot password
                                </a> */}
                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                    Log in
                                </Button>
                                New to Fundo? <Link to="/register">register now!</Link>
                            </Form.Item>
                        </Form>
                    </Card>
                    
                </div>
                <div className="col-sm-1">

                </div>
                <div className="col-sm-4">
                </div>
            </div>

        );
    }
}

const Login = Form.create({ name: 'register' })(LoginForm);

export default Login