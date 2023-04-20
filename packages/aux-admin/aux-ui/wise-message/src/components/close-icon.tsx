import { defineComponent } from 'vue';
import { useNamespace } from '../../../shared/hooks/use-namespace';
export default defineComponent({
    emits: ['click'],
    setup(props, { emit }) {
        const ns = useNamespace('wise-message')
        return () => (
            <div class={ns.e('icon-close')} onClick={(e) => emit('click', e)}>
                <i class="iconfont icon-close"></i>
            </div>
        );
    },
});