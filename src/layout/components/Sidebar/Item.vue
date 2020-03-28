<script>
import { Collapse } from "element-ui";
export default {
  name: "MenuItem",
  functional: true,
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    collapse: {
      default: false
    }
  },
  render(h, context) {
    const { icon, title, collapse } = context.props;
    const vnodes = [];

    if (icon && collapse) {
      vnodes.push(<i class={icon + " menu-icon"} />);
    }
    if (icon && !collapse) {
      vnodes.push(<i class={icon} />);
    }

    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }
    return vnodes;
  }
};
</script>
