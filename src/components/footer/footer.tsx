import React from 'react';

import { Col, Layout, Row } from 'antd';

import { useTeamRecoilState } from '@/hooks/useTeamRecoil';

import { TextLogo } from '../common/logo/Logo';

const Footer = () => {
  const [team] = useTeamRecoilState();

  return (
    <Layout.Footer
      className={`text-center text-white border-t border-[#d6d6d6]`}
      style={{ background: team.teamColor }}
    >
      <Row align="middle" justify="center">
        <Row align="middle">
          <TextLogo />
        </Row>
        <Col>
          <h4 className="pl-3 text-white">©2021 Created by mukjo96</h4>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
