import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '阿垚出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: 'https://wx.zsxq.com/dweb2/index/group/51122858222824',
          blankTarget: true,
        },
        {
          key: 'knowledge',
          title: '知识库',
          href: 'https://bcdh.yuque.com/staff-wpxfif/resource?',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 刘铭垚的github</>,
          href: 'https://github.com/Liumingyao666',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
