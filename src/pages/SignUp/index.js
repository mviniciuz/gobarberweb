import React from 'react';
import { Link } from 'react-router-dom';
import {Input, Form} from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data){
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="gobarber" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Criar conta </button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}
