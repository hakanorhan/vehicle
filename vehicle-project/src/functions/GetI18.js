import React from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Exports useTranslation() from react-i18next for internationalization.
 * @returns useTranslation()
 */
export function GetI18() {
    return useTranslation("global")
}
