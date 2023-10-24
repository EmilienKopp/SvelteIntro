<script lang="ts">
    import { status } from './stores';

</script>

<div>
    <label>
        Change my status:
    
    
        <select bind:value={$status}>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="away">Away</option>
        </select>
    
    </label>
</div>

<style>
    div {
        border: 1px solid #ccc;
        border-radius: 15px 15px;
        padding: 0.5em;
        min-height: 1em;
    }
</style>