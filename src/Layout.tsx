
import * as React from 'react'
import styled from 'styled-components'
import {
  Col,
  Row,
  Typography,
} from 'antd'

interface LayoutProps {
  currencyInput: React.ReactNode
  dateSlider: React.ReactNode
  ratesTable: React.ReactNode
  title: string
}

const LayoutComponent = styled.div`
  margin: 16px;
`

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <LayoutComponent>
      <Row
        gutter={[ 0, 32 ]}
      >
        <Col
          xs={{ span: 24 }}
          md={{ span: 16, offset: 4 }}
          // @ts-ignore
          align="middle"
        >
          <Typography.Title
            level={1}
            style={{ margin: 0 }}
            children={props.title}
          />
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 16, offset: 4 }}
          children={props.currencyInput}
        />
        <Col
          xs={{ span: 24 }}
          md={{ span: 16, offset: 4 }}
          children={props.dateSlider}
        />
        <Col
          xs={{ span: 24 }}
          md={{ span: 16, offset: 4 }}
          children={props.ratesTable}
        />
      </Row>
    </LayoutComponent>
  )
}

