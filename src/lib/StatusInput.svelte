<script lang="ts">
    // import { status } from './stores';

    export let status: string = 'offline'
</script>

<label>
    Change my status:


    <select bind:value={status}>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
        <option value="away">Away</option>
    </select>
    <!-- <select bind:value={$status}>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
        <option value="away">Away</option>
    </select> -->

</label>