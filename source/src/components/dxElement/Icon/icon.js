/**
 * 案例：<AfIcon
            class="icontongyong-bianji"
            type="tIcon"
            @click="edit(scope.row)"
          ></AfIcon>
 * @param {String} type normal 正常样式  tIcon 在table上显示的样式
 */
export default {
    functional: true,
    name: 'AfIcon',
    data() {
      return {};
    },
    props: {
      type: {
        type: String,
        default: 'normal'
      },
      size: {
        type: String,
        default: 'normal'
      }
    },
    render(h, context) {
      return (
        <i
          {...{
            staticStyle: {
              color: context.props.type === 'tIcon' ? '#a3c9f3' : '',
              fontSize: context.props.size === 'sIcon' ? '14px' : '16px'
            },
            ...context.data
          }}
          style="cursor: pointer;display:inline-block"
        ></i>
      );
    }
  };
  