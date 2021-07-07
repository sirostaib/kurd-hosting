import React from 'react'
import styled, { css } from "styled-components";
import { Link } from "react-router-dom"


export default function AdminPanel() {
    return (
        <div>
         <Group2>
        <Group>
          <Rect></Rect>
        </Group>
        <AdminPanel2>Kurd Estate - Admin Panel</AdminPanel2>
      </Group2>
      <Group3>
        <Rect2></Rect2>
        <Group4>
          <Rect3></Rect3>
        </Group4>
        <ViewAll><Link to="/AdminPost">View all Posts By Users</Link></ViewAll>
        <Rect4></Rect4>
        <LoremIpsum ><Link to="/AdminContact">View all Contact Messages</Link></LoremIpsum>
        <Rect5></Rect5>
        <ViewAllAccounts><Link to="/AdminAccount">View all Accounts</Link></ViewAllAccounts>
      </Group3>


        </div>
    )
}

const Group2 = styled.div`
  top: 75px;
  left: 19px;
  width: 2100px;
  height: 156px;
  position: absolute;
  display: flex;
`;

const Group = styled.div`
  top: 0px;
  left: 0px;
  width: 2100px;
  height: 156px;
  position: absolute;
  display: flex;
`;

const Rect = styled.div`
  top: 0px;
  left: 0px;
  width: 2100px;
  height: 156px;
  position: absolute;
  background-color: #E6E6E6;
`;

const AdminPanel2 = styled.span`
  font-family: Roboto;
  top: 46px;
  left: 700px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 55px;
`;

const Group3 = styled.div`
  top: 315px;
  left: 0px;
  width: 2100px;
  height: 364px;
  position: absolute;
  display: flex;
`;

const Rect2 = styled.div`
  top: 0px;
  left: 0px;
  width: 2100px;
  height: 364px;
  position: absolute;
  background-color: #E6E6E6;
`;

const Group4 = styled.div`
  top: 48px;
  left: 37px;
  width: 1254px;
  height: 134px;
  position: absolute;
  display: flex;
`;

const Rect3 = styled.div`
  top: 0px;
  left: 600px;
  width: 754px;
  height: 134px;
  position: absolute;
  border-radius: 63px;
  border-width: 4px;
  border-color: #000000;
  background-color: rgba(0,0,0,1);
  border-style: solid;
`;

const ViewAll = styled.span`
  font-family: Roboto;
  top: 88px;
  left: 801px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 45px;
`;

const Rect4 = styled.div`
  top: 242px;
  left: 550px;
  width: 520px;
  height: 81px;
  position: absolute;
  background-color: rgba(0,0,0,1);
  border-width: 5px;
  border-color: #000000;
  border-radius: 79px;
  border-style: solid;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 262px;
  left: 621px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(226,226,226,1);
  font-size: 34px;
`;

const Rect5 = styled.div`
  top: 242px;
  left: 1127px;
  width: 456px;
  height: 81px;
  position: absolute;
  background-color: rgba(0,0,0,1);
  border-width: 5px;
  border-color: #000000;
  border-radius: 79px;
  border-style: solid;
`;

const ViewAllAccounts = styled.span`
  font-family: Roboto;
  top: 262px;
  left: 1230px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(226,226,226,1);
  font-size: 34px;
`;
