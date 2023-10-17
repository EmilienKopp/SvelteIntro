<script lang="ts">
    import { status } from './stores';

</script>

<label>
    Change my status:


    <select bind:value={$status}>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
        <option value="away">Away</option>
    </select>

</label>