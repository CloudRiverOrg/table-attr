import { h, ref, reactive } from 'vue'

export default {
  setup(props, context) {
    const count = ref(20);
    return () => {
      return (<div class="table-attr-wrap">
        { count.value } 000---999
        <p>
          { props.message }
        </p>
    </div>)
    };
  }
}