<template>
  <tr>
    <td><slot name="name"></slot></td>
    <td class="text-center">
      <strong>(<slot name="type"></slot>)</strong>
    </td>
    <td class="text-center"><slot name="default"></slot></td>
    <td class="text-center">
      <strong><slot name="mandatory">No</slot></strong>
    </td>
    <td><slot name="description"></slot></td>
  </tr>
</template>
