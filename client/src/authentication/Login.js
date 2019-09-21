import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd';
import { Link, Redirect } from "react-router-dom"
import axios from "../config/axios"
import "../App.css"

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect : false
        }
    }
    error = () => {
        message.error("something went wrong");
    };
    success = () => {
        message.success('You are successfully logged in');
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const formData = {
                    email: values.email,
                    password: values.password
                }
                console.log(formData)
                axios.post('/users/login', formData)
                    .then(response => 
                    {
                        localStorage.setItem('token', response.data.token)
                        this.props.handleIsAuthenticated(true)
                        this.setState(() => ({ redirect: true }))
                        this.success()
                    }
                    )
                    .catch(err => {
                        this.err()
                    })
            }
        });
    };

    render() {
        if(this.state.redirect){
            return <Redirect to="/" />
        }
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