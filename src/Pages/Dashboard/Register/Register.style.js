import styled from '@emotion/styled';
import Constants from '../../../Config/Constants';

export const WrapperRegister = styled.div`
   position: relative;
  background: ${Constants.COLOR.BLUE};
  height: 100vh;
  width: 100%;

  .form-register {
    position: relative;
    width: 500px;
    height: auto;
    margin: 0 auto;
    padding: 24px;
    background: ${Constants.COLOR.WHITE};
    border-radius: 3px;
    top: 20%;
  }
`;
