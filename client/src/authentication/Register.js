import React, { Component } from 'react'
import { Input, Form, Icon, Card, Button } from 'antd';
import axios from "axios"
import "../App.css"
class RegistrationForm extends Component {
    state = {
        confirmDirty: false,
        notice: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const formData = {
                    username: values.username,
                    email: values.email,
                    password: values.password
                }
                console.log(formData)
                axios.post("http://localhost:3005/users/register", formData)
                    .then(() => this.setState(() => ({ notice: "Successfully registered" })))
                    .catch(err => console.log(err))
                setTimeout(() => {
                    this.props.history.push("/login")
                }, 2000);
            }

        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      };
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div style={{ backgroundColor: "#6f0000" }}>
                <div className="row">
                    <div className="col-xs col-sm-1 col-md-1 col-lg-1" ></div>
                    <div className="col-sm reg-title" >
                        <p className="title">We are here to help you</p>
                        <p>Start the campaign, Raise the money for your good</p>
                    </div>
                    <div className="col-sm-1" ></div>
                    <div className="col-sm">
                        <p className="notice">{this.state.notice}</p>
                        <Card title="Sign Up" style={{ width: 475, marginTop: 80, borderRadius: 10, marginBottom: 43 }} headStyle={{ textAlign: "center", fontSize: 30 }}>
                            <Form onSubmit={this.handleSubmit} >
                                <Form.Item style={{ width: 420 }} label="User name">
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Username"
                                            size="large"
                                        />,
                                    )}
                                </Form.Item>
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
                                <Form.Item style={{ width: 420 }} label="Password" hasFeedback>
                                    {getFieldDecorator('password', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            }, {
                                                validator: this.validateToNextPassword,
                                            },
                                        ],
                                    })(<Input.Password
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="password"
                                        size="large"
                                    />
                                    )}
                                </Form.Item>
                                <Form.Item style={{ width: 420 }} label="Confirm Password" hasFeedback>
                                    {getFieldDecorator('confirm', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            {
                                                validator: this.compareToFirstPassword,
                                            },
                                        ],
                                    })(<Input.Password onBlur={this.handleConfirmBlur}
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Confirm password"
                                        size="large"
                                    />
                                    )}
                                </Form.Item>
                                <Button type="primary" htmlType="submit" size="large" style={{ width: "100%", marginTop: 20 }}>
                                    Register
                                </Button>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

const Register = Form.create({ name: 'register' })(RegistrationForm);

export default Register